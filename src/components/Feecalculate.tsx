import { useEffect, useState } from "react";

type allProps = {
  cartValue: number;
  distance: number;
  items: number;
  date: Date;
};

export const Feecalculate = (props: allProps) => {
  const { cartValue, distance, items, date } = props;


  const [cartsurcharge, setCartsurcharge] = useState(0);
  const [deliveryfee, setDeliveryfee] = useState(0);
  const [itemfee, setItemfee] = useState(0);

  const [fee, setFee] = useState(0);

  useEffect(() => {
    chargefee();
  });

  const chargefee = () => {
    if (cartValue >= 10) {
      setCartsurcharge(0);
    } else if (cartValue > 0 && cartValue < 10) {
      setCartsurcharge(10 - cartValue);
    }

    let itemSurcharge = 0;

    if (items > 4) {
      itemSurcharge = (items - 4) * 0.5;
      setItemfee(itemSurcharge);
    } else if (items <= 4) {
      setItemfee(0);
    }

    let extraDistancefee = 0;
    if (distance > 0 && distance <= 1000) {
      setDeliveryfee(2);
    } else if (distance > 1000) {
      if (((distance - 1000) / 500) % 1 > 0) {
        extraDistancefee = Math.trunc((distance - 1000) / 500) * 1 + 1;
      } else {
        extraDistancefee = Math.trunc((distance - 1000) / 500);
      }
      setDeliveryfee(2 + extraDistancefee);
    }
  };

  const getFee = () => {
    if (cartsurcharge + deliveryfee + itemfee > 15) {
      setFee(15);
    } else {
      if (date.getDay() === 5) {
        if (date.getHours() >= 15 && date.getHours() <= 19) {
          setFee((cartsurcharge + deliveryfee + itemfee) * 1.1);
        } else {
          setFee(cartsurcharge + deliveryfee + itemfee);
        }
      } else {
        setFee(cartsurcharge + deliveryfee + itemfee);
      }
    }
  };

  return (
    <>
      <button onClick={getFee}>Calculate delivery price</button>
      <p>
        <b>Delivery price:</b> {fee.toFixed(2)} &euro;
      </p>
    </>
  );
};
