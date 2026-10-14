import { SearchIcon } from "lucide-react";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
export function InputGroupInlineStart() {
  return (
    <Field className="max-w-sm bg-white rounded-full">
      <InputGroup className="rounded-full h-13">
        <InputGroupInput
          id="inline-start-input"
          placeholder="Course, topic, creator"
        />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
