createURL ()
{
    const { lastSection, lastSorting, lastWindow, page, viral } = this.state;
    let url = `/getImageURLS`;

    this.loadImages(url, { lastSection, lastSorting, lastWindow, page, viral });
}
    loadImages(iUrl, params) {
        let URL = new URL(iUrl);
        URL.search = new URLSearchParams(params).toString();

        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID {{myid}}");

        let requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };
        fetch(URL, requestOptions)
          .then((res) => res.json())
          .then((json) =>
            this.setState({ dataList: json.data, loaded: true, showLoader: false })
          )
          .catch((error) => {
            console.log(error);
          });
      }
