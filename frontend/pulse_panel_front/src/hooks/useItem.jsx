import { useState } from "react";
function useItem(items) {
    const formattedItems = Array.isArray(items)
        ? items.map((item) => {
              const idKey = Object.keys(item).find((key) => key.toLowerCase().endsWith("id"));
              const nameKey = Object.keys(item).find((key) => key.toLowerCase().endsWith("name"));
              return {
                  id: item[idKey],
                  name: item[nameKey],
              };
          })
        : [];

    const [activeId, setActiveId] = useState(() => {
        return formattedItems.length > 0 ? formattedItems[0].id : null;
    });

    return {
        formattedItems,
        activeId,
        setActiveId,
    };
}

export { useItem };
