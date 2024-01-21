

const Image = ({hand,image,handleClick}) => {
    return (
        <div className={hand} onClick={()=>handleClick(hand)}>
            <img src={image} alt={hand} />
        </div>
    );
}

export default Image;
