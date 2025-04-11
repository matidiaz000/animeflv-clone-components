import IcoMoon, { IconProps } from "react-icomoon";
import iconSet from "../icomoon/selection.json";

const Icon = (props: IconProps) => {
    return (<IcoMoon iconSet={iconSet} {...props} />)
};

export default Icon;