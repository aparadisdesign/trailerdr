import VideoEmbed from "../components/VideoEmbed";
import { pressCoverage, RESOURCE_VIDEOS } from "../data/resourcesData";
import "./Resources.css";

function Resources() {
  return (
    <>
      {/* Hero */}
      <section className="section section--page-hero">
        <div className="container resources-hero">
          <p className="section-label">Resources</p>
          <h1 className="section-title">News and Video Library</h1>
          <p className="section-subtitle">
            Industry coverage of Trailer Dr. and hands-on video walkthroughs
            covering setup, operation, and the story behind the tool.
          </p>
        </div>
      </section>

      {/* In the News */}
      <section className="section">
        <div className="container">
          <p className="section-label">In the News</p>
          <h2 className="section-title">Press Coverage</h2>
          <div className="resources-news">
            <a
              className="resources-news-card"
              href={pressCoverage.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="resources-news-card__pub">{pressCoverage.publisher}</p>
              <h3 className="resources-news-card__title">
                {pressCoverage.headline}
              </h3>
              <p className="resources-news-card__excerpt">
                {pressCoverage.description}
              </p>
              <span className="resources-news-card__link">
                Read the Article
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section section--muted">
        <div className="container">
          <p className="section-label">Video Library</p>
          <h2 className="section-title">See Trailer Dr. in Action</h2>
          <div className="resources-videos-grid">
            {RESOURCE_VIDEOS.map((video) => (
              <div className="resources-video" key={video.youtubeId}>
                <VideoEmbed
                  youtubeId={video.youtubeId}
                  title={video.title}
                  className="resources-video__embed"
                />
                <p className="resources-video__title">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Resources;
