export default {
  ChangeDateFromYYYYMMMMDD(timeString) {
    let s = timeString
    s = s.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
    return s
  },
}

// export const getImageUrl = (name) => {
//   return new URL(`/src/assets/images/${name}`, import.meta.url).href
// }