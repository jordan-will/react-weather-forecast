interface MessageProps {
  type: 'error' | 'loading' | null;
  showMessage: boolean;
}

export const Message = ({ type, showMessage }: MessageProps) => {
  
  if (!showMessage) return null;

  const handleMessage = (type: 'error' | 'loading') =>{
    switch(type){
      case 'error':
        return 'Error fetching weather data. Please try again later.';
      case 'loading':
        return 'Loading...';
      default:
        return '';
    }
  }

  return (
    <div className={`m-message m-message--${type}`}>
      {handleMessage(type!)}
    </div>
  )
}