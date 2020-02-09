import React from "react";
import FormDietitian from "../../Components/Dietitian/FormDietitian";
import ReaderDietitian from "../../Components/Dietitian/ReaderDietitian";
import Menu from "../../Components/Menu";
import DietitianService from "../../Services/Dietitian/DietitianService";


class Dietitian extends React.Component {

    initialState = {
        isLoaded: false,
        dietitian: ""
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;

    }

    componentDidMount() {
        DietitianService.getDietitianById(1).then((json) => {
            console.log(json)
        });
    }

    render() {
        return (
            <>
                <Menu/>


                {this.props.type === "edit" ?
                    <FormDietitian/> :
                    <ReaderDietitian/>
                }

            </>
        )
    }
}

export default Dietitian;
