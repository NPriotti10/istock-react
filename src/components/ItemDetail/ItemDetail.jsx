import './styles.css'

const ItemDetail = ({itemSelected}) => {
  return (
    <div className='card-container'>
        <h6 className='card-title'>{itemSelected?.title}</h6>
        <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
        <div className='card-description'>
            <h5>{itemSelected?.description}</h5>
        </div>
        <h5>${itemSelected?.price}</h5>
    </div>
  )
}

export default ItemDetail