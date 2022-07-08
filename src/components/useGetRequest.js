import React, { useEffect, useState } from "react";

const useGetRequest = (path) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		fetch(path)
			.then((body) => {
				if (!body.ok) {
					console.log("error");

					throw Error("Cannot get data from API - Request Failed.");
				}

				return body.json();
			})
			.then((list) => {
				setData(list);
				setIsLoading(false);
				setErrorMessage("");
			})
			.catch((e) => {
				console.log(e);
				setErrorMessage(e.message);
				setData([]);
				setIsLoading(false);
			});
	}, [path]);

	return { data, isLoading, errorMessage };
};

export default useGetRequest;
