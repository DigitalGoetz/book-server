const getObservations = function (setObservations, endpoint, classification) {
  const options = {
    method: "GET",
    headers: new Headers({ "X-Glaux-Classification": classification }),
  };

  fetch(endpoint, options)
    .then((response) => response.json())
    .then((response) => {
      setObservations(response);
    });
};

export default getObservations;
