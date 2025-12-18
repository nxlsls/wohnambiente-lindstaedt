import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Hidden fields für Formsubmit
    formData.append("_subject", `Neue Kontaktanfrage: ${formData.get("subject") || "Allgemeine Anfrage"}`);
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@wohnambiente-lindstaedt.de", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Nachricht gesendet",
          description: "Vielen Dank! Wir melden uns zeitnah bei Ihnen.",
        });
        form.reset();
      } else {
        throw new Error("Fehler beim Senden");
      }
    } catch {
      toast({
        title: "Fehler",
        description: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base font-medium">
            Ihr Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Max Mustermann"
            className="h-12 text-base"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-medium">
            E-Mail-Adresse *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="max@beispiel.de"
            className="h-12 text-base"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base font-medium">
            Telefon
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="02422 123456"
            className="h-12 text-base"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-base font-medium">
            Betreff
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="z.B. Anfrage Sonnenschutz"
            className="h-12 text-base"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-base font-medium">
          Ihre Nachricht *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Wie können wir Ihnen helfen?"
          className="text-base resize-none"
        />
      </div>

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
  );
}
