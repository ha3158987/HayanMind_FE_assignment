const END_POINT = "https://jsonplaceholder.typicode.com/comments?"

const API = {
  get: {
    comments : async (page) => {
      const response = await fetch(`${END_POINT}_page=${page}&_limit=10`);
      const fetchedCommentsListData = await response.json();
      return fetchedCommentsListData;
    }
  }
}

export default API;
