import { LoadMoreInterface } from "../../types"
import css from "./LoadMoreBtn.module.css"

export default function LoadMore({ loadMore }: LoadMoreInterface) {
    return (
        <button className={css.button} onClick={loadMore}>Load more</button>
    )
}