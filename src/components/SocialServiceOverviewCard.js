import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
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
        height: "12rem",
        margin: "1rem",
        borderRadius: "2%",
        borderTop: "6px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        boxSizing: "border-box",
    },
    overlay: {
        position: "absolute",
        background: "rgba(0, 0, 0, 0.1)",
        width: "100%",
        height: "100%",
    },
});

const SocialServiceOverviewCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const classes = useStyles();

    const {
        id,
        logo,
        borderColor,
        user,
        label,
        value,
        trendToday,
        handleDrag,
        handleDrop,
    } = props;

    const handleClick = () => {
        setIsFlipped((prevValue) => !prevValue);
    };

    const hasGradientBorder = borderColor.includes("gradient") ? true : false;
    const cardClassName = hasGradientBorder ? "card-gradient-border" : "card";

    return (
        <div className={clsx(classes.container, "social-card-overview")}>
            <AnimationWrapper>
                <div
                    draggable={true}
                    id={id}
                    onDragOver={(ev) => ev.preventDefault()}
                    onDragStart={handleDrag}
                    onDrop={handleDrop}
                >
                    <ReactCardFlip
                        isFlipped={isFlipped}
                        flipDirection="horizontal"
                    >
                        {/* front side */}
                        <div
                            className={
                                hasGradientBorder
                                    ? clsx(classes.card, "card", cardClassName)
                                    : clsx(classes.card, "card", cardClassName)
                            }
                            style={{
                                borderColor: hasGradientBorder
                                    ? "#00000000"
                                    : borderColor,
                            }}
                            onClick={handleClick}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="social logo"
                                    style={{ marginTop: "-2px" }}
                                />
                                <p
                                    className="text-secondary font-bold"
                                    style={{ padding: "0 0 0 5px" }}
                                >{`${user}`}</p>
                            </div>
                            <div>
                                <p
                                    className="text-primary font-bold"
                                    style={{ fontSize: "50px" }}
                                >
                                    {value}
                                </p>
                                <div
                                    className="text-secondary"
                                    style={{ letterSpacing: "5px" }}
                                >
                                    {label.toUpperCase()}
                                </div>
                            </div>
                            <div>
                                <TrendWidget
                                    value={trendToday}
                                    label={"Today"}
                                />
                            </div>
                        </div>
                        {/* back side */}
                        <div
                            className={
                                hasGradientBorder
                                    ? clsx(classes.card, "card", cardClassName)
                                    : clsx(classes.card, "card", cardClassName)
                            }
                            style={{
                                borderColor: hasGradientBorder
                                    ? "#00000000"
                                    : borderColor,
                            }}
                            onClick={handleClick}
                        >
                            <img
                                src={logo}
                                alt="social logo"
                                style={{ margin: "auto", width: "60%" }}
                            />
                        </div>
                    </ReactCardFlip>
                </div>
            </AnimationWrapper>
        </div>
    );
};

export default SocialServiceOverviewCard;
