import close from "../assets/icon-close.svg"
const Button = ({handleRuleClick,showRules}) => {
    return (
        <button onClick={handleRuleClick}>
            {
                !showRules ?

            "rules"
            :
            <img src={close} alt="close" />
            }

        </button>
    );
}

export default Button;
