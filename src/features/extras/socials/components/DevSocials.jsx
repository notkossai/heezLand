import GitHubSvg from "@/assets/svg/socials/github.svg?react";
import LinkedInSvg from "@/assets/svg/socials/linkedin.svg?react";

export default function DevSocials() {
  const developers = [
    {
      id: "medjadi",
      name: "MEDJADI Kossai",
      socials: [
        {
          platform: "GitHub",
          handle: "@notkossai",
          url: "https://github.com/notkossai",
          icon: GitHubSvg
        },
        {
          platform: "LinkedIn",
          handle: "Medjadi Kossai",
          url: "https://www.linkedin.com/in/medjadi-kossai-082971362",
          icon: LinkedInSvg
        }
      ]
    },
    {
      id: "belhoudedj",
      name: "BELHOUDEDJ Kheira",
      socials: [
        {
          platform: "GitHub",
          handle: "@Kheirourbel",
          url: "https://github.com/Kheirourbel",
          icon: GitHubSvg
        },
        {
          platform: "LinkedIn",
          handle: "Belhoudedj Kheira",
          url: "https://www.linkedin.com/in/kheira-belhoudedj-853828308",
          icon: LinkedInSvg
        }
      ]
    }
  ];

  return (
    <main className="dev-socials-section">
      <h1 className="dev-socials-section__title">Our Developers</h1>
      <div className="dev-socials-grid">
        {developers.map((dev) => {
          const { platform, handle, url, icon: IconComponent } = dev.socials[0];
          
          return (
            <div key={dev.id} className="dev-profile">
              <h2 className="dev-profile__name">{dev.name}</h2>
              {dev.socials.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="dev-social-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="dev-social-card__icon">
                      <SocialIcon alt={social.platform} />
                    </div>
                    <div className="dev-social-card__content">
                      <h3 className="dev-social-card__platform">{social.platform}</h3>
                       <p>{social.handle}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}
