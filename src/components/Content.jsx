import styles from './content.module.css'

function convert(tempInK) {
  return Math.ceil(-273.15 + tempInK);
}

export default function Content({ isLoading, data }) {
  let content = "Loading...";
  const temp = convert(data?.main?.temp);
  isLoading || isNaN(temp)
    ? content
    : (content = (
        <div className={styles.content}>
          🌡temperature: {temp}°C <br/>
          💧humidity: {data?.main?.humidity} <br/>
          💨wind speed:{data?.wind?.speed} m/sec
        </div>
      ));
  return content;
}
