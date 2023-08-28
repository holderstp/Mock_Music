import { useParams } from "react-router-dom";

const SearchPage = () => {
  const params = useParams();
  console.log(params);
  return <div>search page ne abc</div>;
};
export default SearchPage;
