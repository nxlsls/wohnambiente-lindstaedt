import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function CallbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      time: formData.get("time"),
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@wohnambiente-lindstaedt.de", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "Rückruf-Anfrage von der Website",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Ihre Rückruf-Anfrage wurde gesendet!");
      } else {
        throw new Error("Fehler beim Senden");
      }
    } catch (error) {
      toast.error("Fehler beim Senden. Bitte rufen Sie uns direkt an.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-accent/10 rounded-xl p-8 text-center">
        <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
        <h3 className="text-xl font-heading mb-2">Vielen Dank!</h3>
        <p className="text-muted-foreground">
          Ich melde mich schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 shadow-card border border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-lg bg-accent/10 text-accent">
          <Phone className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-heading">Kostenloser Rückruf</h3>
          <p className="text-sm text-muted-foreground">Ich rufe Sie zurück!</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            name="name"
            type="text"
            placeholder="Ihr Name"
            required
            className="h-12"
          />
        </div>
        <div>
          <Input
            name="phone"
            type="tel"
            placeholder="Ihre Telefonnummer"
            required
            className="h-12"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Clock className="h-4 w-4" />
            <span>Wann soll ich Sie anrufen?</span>
          </div>
          <select
            name="time"
            className="w-full h-12 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="vormittags">Vormittags (9-12 Uhr)</option>
            <option value="mittags">Mittags (12-14 Uhr)</option>
            <option value="nachmittags">Nachmittags (14-17 Uhr)</option>
            <option value="abends">Abends (17-19 Uhr)</option>
            <option value="egal">Jederzeit</option>
          </select>
        </div>
        <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
          {isSubmitting ? "Wird gesendet..." : "Rückruf anfordern"}
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          Ich melde mich in der Regel noch am selben Werktag.
        </p>
      </form>
    </div>
  );
}
