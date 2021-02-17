import React, { useEffect, useState } from "react";
import { servicesMetadata } from "../data/SocialServicesData";
import SocialServiceOverviewCard from "./SocialServiceOverviewCard";

const localStorageKey = "social-dashboard-overview";

const OverviewWidget = () => {
    const [dragId, setDragId] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        let initialServices;
        try {
            const savedServices = JSON.parse(
                localStorage.getItem(localStorageKey)
            );
            if (Array.isArray(savedServices) === true) {
                initialServices = savedServices;
            } else {
                initialServices = servicesMetadata;
            }
        } catch (e) {
            initialServices = servicesMetadata;
        }

        setCards(initialServices);
    }, []);
    const handleDrag = (ev) => {
        setDragId(ev.currentTarget.id);
    };

    const handleDrop = (ev) => {
        if (!dragId) {
            return;
        }

        const dragCard = cards.find((card) => card.id === dragId);
        const dropCard = cards.find((card) => card.id === ev.currentTarget.id);

        const newCardState = cards.map((card) => {
            if (card.id === dragId) {
                return { ...dropCard };
            }
            if (card.id === ev.currentTarget.id) {
                return { ...dragCard };
            }
            return card;
        });

        setDragId(null);
        setCards(newCardState);
        localStorage.setItem(localStorageKey, JSON.stringify(newCardState));
    };

    return (
        <div className="cards-overview-container">
            {cards.map((data) => (
                <SocialServiceOverviewCard
                    key={data.id}
                    {...data}
                    handleDrag={handleDrag}
                    handleDrop={handleDrop}
                />
            ))}
        </div>
    );
};

export default OverviewWidget;
