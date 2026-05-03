import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Footer from '@/components/Footer'
import styles from '@/styles/Contact/contact.module.scss'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: { name: '', email: '', message: '' },
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      reset()
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return (
    <>
      <section className={styles.page}>
        <div className={styles.topBar}>
          <div className={styles.breadcrumb}>{t("contact.breadcrumb")}</div>
          <div className={styles.status}>{t("contact.status")}</div>
        </div>

        <div className={styles.hero}>
          <h1>{t("contact.hero.line1")}</h1>
          <h1>{t("contact.hero.line2")}</h1>
        </div>

        <div className={styles.contactContent}>
          <section className={styles.formSection}>
            <div className={styles.sectionLabel}>{t("contact.form.label")}</div>
            <form
              className={styles.contactForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">{t("contact.form.name.label")}</label>
                <input
                  id="name"
                  type="text"
                  placeholder={t("contact.form.name.placeholder")}
                  {...register("name", {
                    required: t("contact.form.name.label") + " is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <span className={styles.errorMessage}>
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">{t("contact.form.email.label")}</label>
                <input
                  id="email"
                  type="email"
                  placeholder={t("contact.form.email.placeholder")}
                  {...register("email", {
                    required: t("contact.form.email.label") + " is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">
                  {t("contact.form.message.label")}
                </label>
                <textarea
                  id="message"
                  placeholder={t("contact.form.message.placeholder")}
                  rows={4}
                  {...register("message", {
                    required: t("contact.form.message.label") + " is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <span className={styles.errorMessage}>
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : t("contact.form.send")}
              </button>
            </form>
          </section>

          <section className={styles.directContact}>
            <div className={styles.sectionLabel}>
              {t("contact.direct.label")}
            </div>
            <div className={styles.contactLinks}>
              <div className={styles.contactItem}>
                <span className={styles.contactKey}>
                  {t("contact.direct.email.key")}
                </span>
                <a href="mailto:masuevamadi@gmail.com">
                  {t("contact.direct.email.value")}
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactKey}>
                  {t("contact.direct.github.key")}
                </span>
                <a
                  href="https://github.com/MARBORZ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contact.direct.github.value")}
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactKey}>
                  {t("contact.direct.location.key")}
                </span>
                <div className={styles.locationInfo}>
                  <a
                    href="https://maps.app.goo.gl/VVsTDggwqQEqBF2u5"
                    target="blank"
                  >
                    {t("contact.direct.location.value")}
                  </a>
                  <p className={styles.coordinates}>
                    {t("contact.direct.location.coords")}
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactKey}>
                  {t("contact.direct.reply.key")}
                </span>
                <span className={styles.replyLanguages}>
                  {t("contact.direct.reply.value")}
                </span>
              </div>
            </div>
          </section>
        </div>
        <Footer title={t("contact.footer.next")} href="/" />
      </section>
    </>
  );
}
