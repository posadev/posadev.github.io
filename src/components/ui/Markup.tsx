import {Checkbox} from "@/components/ui/checkbox.tsx";

const Markup = ({id, text}) => {
  return (
      <li className="flex items-center gap-2">
          <Checkbox id={id} className="peer"/>
          <label
              htmlFor={id}
              className="peer-data-[state=checked]:line-through peer-data-[state=checked]:text-primary-600"
          >
              {text}
          </label>
      </li>
  )
}

export default Markup