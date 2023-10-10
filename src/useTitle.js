import { useEffect } from "react";

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]); // title 값이 변경될 때 마다, 재 랜더링
}

export default useTitle;