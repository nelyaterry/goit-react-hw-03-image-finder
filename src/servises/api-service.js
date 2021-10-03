import axios from "axios";

const fetchImagine = (request, page) => {
  // const KEY_IPI = "22756527-2e30581cfec2e7755e4985106";
  // return axios.get(
  //   `https://pixabay.com/api/?q=${request}&page=${page}&key=${KEY_IPI}&image_type=photo&orientation=horizontal&per_page=12`
  // );

  return axios.get("https://pixabay.com/api/", {
    params: {
      q: request,
      key: "22756527-2e30581cfec2e7755e4985106",
      image_type: "photo",
      orientation: "horizontal",
      per_page: 12,
      page: page,
    },
  });
};

export default fetchImagine;
