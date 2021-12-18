import PropTypes from 'prop-types'
// let menuData = [
//     {
//         id: 1,
//         iceCream: { id: 1, name: "ice1" },
//         inStock: true,
//         quantity: 20,
//         price: 1.52,
//         description: "some description"
//     },
const IceCremImage = ({ iceCreamId }) => (
    // console.log(iceCreamId)
    iceCreamId != null && <img
        src={`${process.env.PUBLIC_URL}/ice-cream-images/ice-cream-${iceCreamId.toString()}.svg`}
        alt=""
    />
)

IceCremImage.propTypes ={
    iceCreamId: PropTypes.number.isRequired
}
export default IceCremImage