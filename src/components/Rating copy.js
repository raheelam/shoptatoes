import Rater from "react-rating";
 
const Rating = ({rating}) => {

 
  return (
    <>
      <Rater
        placeholderRating={2}
        placeholderSymbol={<i className="ui yellow star icon"></i>}
        fractions={2}
        emptySymbol={<i className="ui star outline icon"></i>}
        fullSymbol={<i className="ui yellow star icon"></i>}
        initialRating={rating}
        readonly
      />
    </>
  );
}
 
export default Rating;