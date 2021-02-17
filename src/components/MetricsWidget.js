import React, { useState, useEffect } from "react";
import { metricsMetadata } from "../data/SocialServicesData";
import SocialServiceMetricsCard from "./SocialServiceMetricsCard";

const localStorageKey = "social-dashboard-metrics";

const MetricsWidget = (props) => {
    const [dragId, setDragId] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        let initialMetrics;
        try {
            const savedServices = JSON.parse(
                localStorage.getItem(localStorageKey)
            );
            if (Array.isArray(savedServices) === true) {
                initialMetrics = savedServices;
            } else {
                initialMetrics = metricsMetadata;
            }
        } catch (e) {
            initialMetrics = metricsMetadata;
        }
        setCards(initialMetrics);
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
        <div className="cards-metrics-container">
            {cards.map((metricsData) => (
                <SocialServiceMetricsCard
                    key={metricsData.id}
                    {...metricsData}
                    handleDrag={handleDrag}
                    handleDrop={handleDrop}
                />
            ))}
        </div>
    );
};

export default MetricsWidget;
