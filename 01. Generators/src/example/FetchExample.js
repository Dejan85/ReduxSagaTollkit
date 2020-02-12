import React from "react";

const FetchExample = () => {
  // some dumy function
  function request(url) {
    function fetchData() {}

    fetchData(url, response => {
      it.next(response);
    });
  }

  // generators func
  function* main() {
    let result1 = yield request("http://some.url.1");
    let data = JSON.parse(result1);

    let result2 = yield request("http://some.url.2" + data.id);
    let resp = JSON.parse(result2);

    console.log("The value you asked for: " + resp.value);
  }

  let it = main();
  it.next();

  return <div>Fetch Example</div>;
};

export default FetchExample;
