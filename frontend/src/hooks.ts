import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay = 1000) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
            console.log('debounced');
        }, delay);



        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
}
