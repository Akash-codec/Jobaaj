import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignupForm({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="py-2">
        <CardHeader className="text-center flex items-center justify-center rounded-t-lg bg-[#377dff]">
          <CardTitle className="text-[22px] font-semibold py-3.5 text-white">
            Please Register To Continue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel
                  htmlFor="name"
                  className="font-semibold text-gray-700"
                >
                  Full Name*
                </FieldLabel>
                <Input id="name" type="text" placeholder="John Doe" required />
              </Field>
              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="font-semibold text-gray-700"
                >
                  Email*
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel
                  htmlFor="phone-number"
                  className="font-semibold text-gray-700"
                >
                  Mobile Number*
                </FieldLabel>
                <Input
                  id="phone-number"
                  type="number"
                  placeholder=""
                  required
                />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel
                      htmlFor="password"
                      className="font-semibold text-gray-700"
                    >
                      Password
                    </FieldLabel>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <FieldLabel
                      htmlFor="confirm-password"
                      className="font-semibold text-gray-700"
                    >
                      Confirm Password
                    </FieldLabel>
                    <Input id="confirm-password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel
                  htmlFor="resume"
                  className="font-semibold text-gray-700"
                >
                  Resume*
                </FieldLabel>
                <Input
                  id="resume"
                  type="file"
                  required
                  className="border border-gray-300 rounded-full p-0
                    file:bg-[#377dff] file:text-white file:px-5 file:h-full file:mr-2
                    file:rounded-lg file:font-semibold file:cursor-pointer
                    hover:file:bg-[#13538a]"
                />
              </Field>
              <Field>
                <Button className="bg-[#377dff]" type="submit">
                  Create Account
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
