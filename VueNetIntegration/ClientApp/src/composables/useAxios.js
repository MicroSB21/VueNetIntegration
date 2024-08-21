import { ref } from 'vue';
import myAPI from '@/api/myAPI.js';

export function useAxios() {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const fetchData = async (urlEndPoint) => {
    loading.value = true;
    try {
      const response = await myAPI.get(urlEndPoint);
      data.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { data, error, loading, fetchData };
}

//Composable to use Axios request in any component
//the idea for composables is separate logic that
//could be reuse in other components or pages