import { useParams } from "react-router-dom";

const SearchPage = () => {
  const params = useParams();
  console.log(params);
  return <div>search page ne</div>;
};
export default SearchPage;
