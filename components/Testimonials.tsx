import { getDictionary, type Locale } from "@/lib/i18n";
import { getReviews } from "@/lib/testimonials";
import { getLocalizedService } from "@/lib/services";

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="flex gap-0.5 text-signal-press"
      aria-label={`${rating}/5`}
      role="img"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8L12 3Z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Reviews, or nothing. There is deliberately no `AggregateRating` schema here:
 * marking up a rating that can't be verified is a structured-data violation and
 * would contradict the one claim this brand is built on (CLAUDE.md §6/§7).
 *
 * With no verified reviews and the sample flag off, this renders nothing at all
 * — except on pages that pass `showEmptyState`, where saying "we don't have
 * reviews yet, and we won't invent them" is itself the trust signal.
 */
export default function Testimonials({
  lang,
  zone,
  serviceSlug,
  limit = 3,
  showEmptyState = false,
}: {
  lang: Locale;
  zone?: string;
  serviceSlug?: string;
  limit?: number;
  showEmptyState?: boolean;
}) {
  const dict = getDictionary(lang);
  const { reviews, isSample } = getReviews({ zone, serviceSlug, limit });

  if (reviews.length === 0) {
    if (!showEmptyState) return null;
    return (
      <div className="rounded-3xl border border-ink/10 bg-surface p-7">
        <h2 className="font-headline text-xl font-bold text-ink">
          {dict.reviews.noneYetTitle}
        </h2>
        <p className="mt-2 leading-relaxed text-muted">
          {dict.reviews.noneYetBody}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-headline text-2xl font-extrabold tracking-tight text-ink">
        {dict.reviews.title}
      </h2>
      <p className="mt-2 max-w-2xl leading-relaxed text-muted">
        {dict.reviews.lead}
      </p>

      {isSample && (
        <p className="mt-4 rounded-2xl border border-danger/30 bg-danger/5 px-4 py-3 text-sm font-medium text-danger">
          {dict.reviews.sampleNotice}
        </p>
      )}

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => {
          const service = getLocalizedService(review.serviceSlug, lang);
          return (
            <figure
              key={`${review.name}-${review.date}`}
              className="flex flex-col rounded-3xl border border-ink/10 bg-white p-6 shadow-sm"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-3 flex-1 leading-relaxed text-ink/80">
                {review.body[lang]}
              </blockquote>
              <figcaption className="mt-4 border-t border-ink/8 pt-4 text-sm">
                <span className="block font-bold text-ink">{review.name}</span>
                <span className="block text-muted">
                  {review.zone}
                  {service && ` · ${service.title}`}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
