import contact from "@/data/contact.json";

export function ContactSection() {
  return (
    <section>
      <h1 className="text-4xl font-bold">{contact.name}</h1>
      <p className="text-xl text-gray-600 mt-1">{contact.title}</p>
      <p className="mt-4 text-gray-700 leading-relaxed">{contact.summary}</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
        {contact.email && (
          <a href={`mailto:${contact.email}`} className="hover:text-gray-900">
            {contact.email}
          </a>
        )}
        {contact.phone && <span>{contact.phone}</span>}
        {contact.location && <span>{contact.location}</span>}
        {contact.github && (
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            GitHub
          </a>
        )}
        {contact.linkedin && (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            LinkedIn
          </a>
        )}
        {contact.website && (
          <a
            href={contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            Website
          </a>
        )}
      </div>
    </section>
  );
}
