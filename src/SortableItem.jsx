import { useSortable } from "@dnd-kit/react/sortable";


const SortableItem = ({ id, index, children}) => {
    const { ref } = useSortable({
        id, index
    });
  return (
    <li ref={ref}
       style={{
        listStyle: "none",
        padding: "12px",
        border: "1px solid black",
        marginBottom: "8px",
        borderRadius: "4px",
        background: "white",
        cursor: "grab"
       }}
    >
        {children}
    </li>
  )
}

export default SortableItem;
