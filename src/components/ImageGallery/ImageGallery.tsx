import { ImageGalleryInterface } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ items, openModal}: ImageGalleryInterface) {
    return (
        <ul className={css.container}>{items.map((item) => <li key={item.id}><ImageCard item={item} openModal={openModal} /></li>) }</ul>
    )
      
}