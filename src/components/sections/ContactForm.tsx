import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Bitte geben Sie Ihren Namen an.")
    .min(2, "Der Name muss mindestens 2 Zeichen haben."),
  email: z.string().min(1, "Bitte geben Sie Ihre E-Mail-Adresse an.").email("Bitte gültige E-Mail-Adresse eingeben."),
  phone: z.string().max(30, "Telefonnummer zu lang.").optional().or(z.literal("")),
  subject: z.string().max(200, "Betreff zu lang.").optional().or(z.literal("")),
  message: z
    .string()
    .min(1, "Bitte geben Sie eine Nachricht ein.")
    .max(2000, "Die Nachricht darf maximal 2000 Zeichen haben."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkowngyn";

  const onSubmit = async (values: ContactFormValues) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    if (values.phone) formData.append("phone", values.phone);
    if (values.subject) formData.append("subject", values.subject);
    formData.append("message", values.message);
    formData.append("_subject", `Neue Kontaktanfrage: ${values.subject || "Allgemeine Anfrage"}`);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok && !result.error) {
        toast({
          title: "Nachricht gesendet",
          description: "Vielen Dank! Ich melde mich zeitnah bei Ihnen.",
        });
        form.reset(defaultValues);
      } else {
        throw new Error(result.error || "Fehler beim Senden");
      }
    } catch {
      toast({
        title: "Fehler",
        description: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">Ihr Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Max Mustermann"
                    className="h-12 text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">E-Mail-Adresse *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="max@beispiel.de"
                    className="h-12 text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">Telefon</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="02422 123456"
                    className="h-12 text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">Betreff</FormLabel>
                <FormControl>
                  <Input
                    placeholder="z.B. Anfrage Sonnenschutz"
                    className="h-12 text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">Ihre Nachricht *</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Wie kann ich Ihnen helfen?"
                  className="text-base resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-sm text-muted-foreground">
          <p>
            * Pflichtfelder. Mit dem Absenden stimmen Sie unserer{" "}
            <a href="/datenschutz" className="text-accent underline">
              Datenschutzerklärung
            </a>{" "}
            zu.
          </p>
        </div>

        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Nachricht senden
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
