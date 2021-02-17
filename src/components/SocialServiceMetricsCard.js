import React from "react";
import TrendWidget from "./TrendWidget";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { AnimationWrapper } from "react-hover-animation";

const useStyles = makeStyles({
    container: {
        position: "relative",
    },
    card: {
        width: "14rem",
        height: "8rem",
        margin: "1rem",
        borderRadius: "0.5rem",
    },
    "card-top": {
        padding: "25px 20px",
        display: "flex",
        justifyContent: "space-between",
    },
    "card-bottom": {
        padding: "0px 20px",
        display: "flex",
        justifyContent: "space-between",
    },
});

const SocialServiceMetricsCard = (props) => {
    const classes = useStyles();
    const { id, logo, label, value, trend, handleDrag, handleDrop } = props;

    return (
        <AnimationWrapper>
            <div
                className={clsx(classes.card, "card social-card-overview")}
                draggable={true}
                id={id}
                onDragOver={(ev) => ev.preventDefault()}
                onDragStart={handleDrag}
                onDrop={handleDrop}
            >
                <div className={clsx(classes["card-top"])}>
                    <p className="text-secondary font-bold">{label}</p>
                    <img src={logo} alt="Service Logo" />
                </div>
                <div className={clsx(classes["card-bottom"])}>
                    <p
                        className="text-primary font-bold"
                        style={{ fontSize: "35px" }}
                    >
                        {value}
                    </p>
                    <div style={{ margin: "auto 1px" }}>
                        <TrendWidget value={trend} label={"%"} />
                    </div>
                </div>
            </div>
        </AnimationWrapper>
    );
};

export default SocialServiceMetricsCard;
