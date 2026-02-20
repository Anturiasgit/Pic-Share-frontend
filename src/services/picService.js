const API_URL = "http://localhost:8080/api/pics";

const picService = {
  getAll: async () => {
    const response = await fetch(API_URL);
    return response.json();
  }
};

export default picService;