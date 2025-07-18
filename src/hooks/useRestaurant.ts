import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/constants/constants";

export const fetchRestaurantData = async (id: string | null) => {
  if (!id) return null;

  try {
    const { data } = await axios.get(`${BASE_URL}/proposals/${id}`);
    return data;
  } catch (error: any) {
    console.error("Failed to fetch restaurant data:", error.message);
    return null;
  }
};

// ✅ Correct use of useEffect with async data
export const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: "[Restaurant Name]",
    location: "[Restaurant Location]",
    city: "[City]",
    phone: "+91 84277 07595",
    email: "info@dine3d.com",
    fullAddress: "[Restaurant Name] - [Restaurant Location]",
    pricing: {
      setupFirst40: { standard: 2000, partner: 1000 },
      setupAfter40: { standard: 1500, partner: 850 },
      monthlyHosting: { standard: 3500, partner: 2000 },
      freeViews: { standard: 2000, partner: 3000 },
      extraViews: { standard: 0.75, partner: 0.5 },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const idFromStorage = localStorage.getItem("id");
      const urlParams = new URLSearchParams(window.location.search);
      const idFromUrl = urlParams.get("id");

      const idToUse = idFromUrl || idFromStorage;

      if (!idToUse) return;

      const data = await fetchRestaurantData(idToUse);
      if (data) {
        setRestaurant(data);
        document.title = `${data.name} - AR Menu Proposal`;
      }
    };

    fetchData();
  }, []);

  return restaurant;
};
