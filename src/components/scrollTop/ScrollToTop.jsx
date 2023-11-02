import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}
