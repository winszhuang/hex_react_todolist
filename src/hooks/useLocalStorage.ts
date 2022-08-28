export default function useLocalStorage() {
  function setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  function getItem(key: string) {
    return localStorage.getItem(key);
  }

  return {
    setItem,
    getItem
  }
}