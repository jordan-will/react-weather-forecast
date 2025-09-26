import { useEffect, useState } from 'react'
import axios from 'axios'
import { getUserCoordinates } from 'utils/getCoordinates';

type UseWeatherOptions = {
  city?: string;
}

export const useWeatherAPI = ({ city }: UseWeatherOptions = {}) => {
  const [data, setData] = useState<any>(null)
  const [data5Days, setData5Days] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        let url = ""
        let url5Days = ""

        if (city) {
          url = `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
          url5Days = `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`
        } else {
          await getUserCoordinates()
            .then(({ latitude, longitude }) => {
              url = `${BASE_URL}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
              url5Days = `${BASE_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
            })
        }
        const response = await axios.get(url)
        const response5Days = await axios.get(url5Days)

        setData(response.data);
        setData5Days(response5Days.data);

      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(true)
      }
      finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [city])

  return {
    data,
    data5Days,
    loading,
    error
  }
}