import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";


import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function LoginForm({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-1">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">
                  <span className="text-gray-700">Your email id</span>
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">
                    <span className="text-gray-700">Password</span>
                  </FieldLabel>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Checkbox id="remeberMe" />
                    <Label htmlFor="remeberMe" className="text-gray-400">
                      Remember Me
                    </Label>
                  </div>
                  <a
                    href="#"
                    className="ml-auto text-sm font-semibold text-[#377dff] underline-offset-2 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </Field>
              <Field className="-mt-2">
                <Button
                  type="submit"
                  className="bg-[#377dff] text-base py-3 leading-6"
                >
                  Log in
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-base">
                Or continue with
              </FieldSeparator>
              <Field className="grid grid-cols-2 gap-4">
                <div className="flex items-center max-w-12 h-12 mx-auto px-2 justify-center rounded-full border bg-[#f6fbfc]">
                  <img src="/Navbar/google.svg" className="h-6" alt="" />
                </div>
                <div className="flex items-center max-w-12 h-12 mx-auto px-2 justify-center rounded-full border bg-[#f6fbfc]">
                  <img
                    src="/Navbar/linkedin.svg"
                    className="h-6 object-cover mx-2"
                    alt=""
                  />
                </div>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
