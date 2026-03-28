import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { palette } from '../theme';
import designerPortrait from '../assets/designer-portrait.png';
import photo1 from '../assets/photo-1.png';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';

const services = [
  {
    title: 'Дизайн-проект интерьера',
    description:
      'Продуманная концепция пространства: планировка, стилистика, материалы, мебель и свет — всё в одной системе.',
  },
  {
    title: 'Комплектация и сопровождение',
    description:
      'Помощь с подбором отделки, мебели и решений, чтобы интерьер не потерял идею на этапе реализации.',
  },
  {
    title: 'Интерьеры под жизнь, а не только под картинку',
    description:
      'Фокус на удобстве, логике пространства и атмосфере, которая ощущается каждый день.',
  },
];

const benefits = [
  'Работаю с проектами в Польше, ЕС и Беларуси',
  'Проекты для квартир, домов и отдельных помещений',
  'Сочетаю эстетику, функциональность и реализацию',
  'Помогаю пройти путь от идеи до цельного результата',
];

const processSteps = [
  {
    step: '01',
    title: 'Знакомство и задача',
    text: 'Обсуждаем образ жизни, ожидания, бюджет, сроки и саму атмосферу, которую вы хотите получить.',
  },
  {
    step: '02',
    title: 'Концепция и планировка',
    text: 'Формируем логику пространства, подбираем стиль, материалы и ключевые интерьерные решения.',
  },
  {
    step: '03',
    title: 'Детализация проекта',
    text: 'Готовим проект, который можно уверенно реализовывать: от визуального образа до практических решений.',
  },
  {
    step: '04',
    title: 'Реализация',
    text: 'Сопровождаем проект и помогаем сохранить задумку в реальном интерьере, а не только на визуализациях.',
  },
];

const projects = [
  {
    title: 'Квартира с мягкой зоной',
    description: 'Светлый интерьер с натуральными материалами и мягкой мебелью.',
  },
  {
    title: 'Современная спальня',
    description: 'Чистая геометрия, встроенные решения и мягкий текстиль.',
  },
  {
    title: 'Тёплый интерьер спальни',
    description: 'Сочетание текстур, света и спокойной цветовой гаммы.',
  },
];

const sectionLabel = {
  fontSize: '11px',
  fontWeight: 500,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.24em',
  color: palette.accent,
};

const cardRadius = '2rem';

function ImagePlaceholder({ height = 320, label }: { height?: number; label?: string }) {
  return (
    <Box
      sx={{
        height,
        width: '100%',
        borderRadius: '1.5rem',
        bgcolor: palette.accentSoft,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {label && (
        <Typography sx={{ color: palette.text, fontSize: '0.875rem' }}>
          {label}
        </Typography>
      )}
    </Box>
  );
}

export default function LandingPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: palette.bg, color: palette.heading }}>
      {/* ─── Hero ─── */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        {/* background image */}
        <Box
          component="img"
          src={photo1}
          alt=""
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.9,
          }}
        />
        {/* soft overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(243,244,243,0.95), rgba(243,244,243,0.7))',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top right, rgba(225,229,226,0.6), transparent 40%)',
          }}
        />

        <Container
          maxWidth="lg"
          sx={{ position: 'relative', py: { xs: 8, md: 12 }, px: { xs: 3, md: 5 } }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* left column */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <Typography
                sx={{
                  mb: 2.5,
                  fontSize: '11px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.28em',
                  color: '#7b807d',
                }}
              >
                Olga Krishtapovich Design
              </Typography>

              <Box
                sx={{
                  display: 'inline-flex',
                  borderRadius: '9999px',
                  border: `1px solid ${palette.accentBorder}`,
                  bgcolor: 'rgba(255,255,255,0.8)',
                  px: 2,
                  py: 1,
                  fontSize: '0.875rem',
                  color: palette.accent,
                  backdropFilter: 'blur(4px)',
                  mb: 2,
                }}
              >
                Дизайнер интерьера • Польша • Познань • Варшава • Минск
              </Box>

              <Typography
                variant="h1"
                sx={{
                  maxWidth: 720,
                  fontSize: { xs: '2.25rem', md: '3.75rem' },
                  lineHeight: 1.12,
                }}
              >
                Интерьеры, в которых красиво жить, а не только смотреть
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  maxWidth: 640,
                  fontSize: '1.125rem',
                  lineHeight: 2,
                  color: palette.text,
                }}
              >
                Создаю продуманные интерьеры для квартир и домов: с логикой, атмосферой
                и вниманием к деталям, которые делают пространство по-настоящему вашим.
              </Typography>

              <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  variant="contained"
                  href="https://www.instagram.com/olga.krishtapovich.design/"
                  disableElevation
                  sx={{
                    borderRadius: '1rem',
                    px: 3,
                    py: 1.5,
                    textTransform: 'none',
                    bgcolor: palette.accent,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    boxShadow: `0 8px 24px ${palette.ring}`,
                    '&:hover': {
                      bgcolor: palette.accentHover,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  Обсудить проект
                </Button>
                <Button
                  variant="outlined"
                  href="#projects"
                  sx={{
                    borderRadius: '1rem',
                    px: 3,
                    py: 1.5,
                    textTransform: 'none',
                    borderColor: palette.accentBorder,
                    color: palette.heading,
                    bgcolor: '#fff',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    '&:hover': { bgcolor: '#f6f7f6' },
                  }}
                >
                  Смотреть проекты
                </Button>
              </Box>

              {/* stat cards */}
              <Grid container spacing={2} sx={{ mt: 5 }}>
                {[
                  { value: '100%', label: 'внимания к удобству и эстетике', icon: <AutoAwesomeOutlinedIcon /> },
                  { value: 'Польша / ЕС', label: 'работа с международными проектами', icon: <PublicOutlinedIcon /> },
                  { value: 'Под ключ', label: 'от идеи до реализации', icon: <VpnKeyOutlinedIcon /> },
                ].map((s) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={s.value}>
                    <Box
                      sx={{
                        borderRadius: '1.5rem',
                        bgcolor: '#fff',
                        p: 2.5,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                        border: `1px solid ${palette.ring}`,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Box sx={{ color: palette.accent, mb: 1.5, fontSize: 28, display: 'flex' }}>
                        {s.icon}
                      </Box>
                      <Typography sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
                        {s.value}
                      </Typography>
                      <Typography sx={{ mt: 0.5, fontSize: '0.875rem', color: palette.text }}>
                        {s.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* right column */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box
                  sx={{
                    borderRadius: cardRadius,
                    bgcolor: '#fff',
                    p: 2,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                    border: `1px solid ${palette.ring}`,
                  }}
                >
                  <Box
                    component="img"
                    src={photo1}
                    alt="Светлый современный интерьер"
                    sx={{
                      aspectRatio: '4/5',
                      width: '100%',
                      borderRadius: '1.5rem',
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    borderRadius: cardRadius,
                    bgcolor: palette.accentSoft,
                    p: 4,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                  }}
                >
                  <Typography sx={sectionLabel}>Подход</Typography>
                  <Typography
                    sx={{
                      mt: 2,
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      lineHeight: 1.5,
                      color: '#2f3230',
                    }}
                  >
                    Не просто «уютно», а точно под ваш ритм жизни, привычки и ощущение
                    дома.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── About ─── */}
      <Container component="section" maxWidth="lg" sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 5 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, lg: 5 }} order={{ xs: 2, lg: 1 }}>
            <Box sx={{ position: 'relative', maxWidth: 460, mx: { xs: 'auto', lg: 0 } }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: -20,
                  top: -20,
                  width: 96,
                  height: 96,
                  borderRadius: '50%',
                  bgcolor: '#e6e9e6',
                  filter: 'blur(32px)',
                }}
              />
              <Box
                sx={{
                  overflow: 'hidden',
                  borderRadius: cardRadius,
                  border: `1px solid ${palette.accentBorder}`,
                  bgcolor: '#fff',
                  p: 1.5,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                }}
              >
                <Box
                  component="img"
                  src={designerPortrait}
                  alt="Портрет дизайнера интерьера"
                  sx={{
                    height: 520,
                    width: '100%',
                    borderRadius: '1.5rem',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 7 }} order={{ xs: 1, lg: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Typography sx={sectionLabel}>Обо мне</Typography>
                <Typography
                  variant="h2"
                  sx={{ mt: 1.5, fontSize: { xs: '1.875rem', md: '2.25rem' } }}
                >
                  Интерьер начинается не со стиля, а с человека
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, color: palette.text, lineHeight: 2 }}>
                <Typography>
                  Я создаю интерьеры, где каждая деталь подчинена общей идее: планировка,
                  свет, материалы, хранение, настроение и сценарии повседневной жизни.
                </Typography>
                <Typography>
                  Моя задача — снять с клиента хаос выбора и собрать пространство, которое
                  будет одновременно выразительным, удобным и реалистичным в исполнении.
                </Typography>
              </Box>

              <Grid container spacing={1.5} sx={{ pt: 1 }}>
                {benefits.map((item) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={item}>
                    <Box
                      sx={{
                        borderRadius: '1rem',
                        border: `1px solid ${palette.border}`,
                        bgcolor: '#fff',
                        px: 2,
                        py: 2,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                        color: palette.text,
                        fontSize: '0.875rem',
                      }}
                    >
                      {item}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ─── Services ─── */}
      <Box
        component="section"
        sx={{ borderTop: `1px solid ${palette.border}`, borderBottom: `1px solid ${palette.border}`, bgcolor: 'rgba(255,255,255,0.7)' }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 5 } }}>
          <Box
            sx={{
              mb: 5,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
              alignItems: { md: 'flex-end' },
              justifyContent: { md: 'space-between' },
            }}
          >
            <Box>
              <Typography sx={sectionLabel}>Услуги</Typography>
              <Typography
                variant="h2"
                sx={{ mt: 1.5, fontSize: { xs: '1.875rem', md: '2.25rem' } }}
              >
                Что можно заказать
              </Typography>
            </Box>
            <Typography sx={{ maxWidth: 640, color: palette.text }}>
              Подход можно адаптировать под масштаб задачи: от полного дизайн-проекта до
              сопровождения конкретных зон и решений.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {services.map((s, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={s.title}>
                <Box
                  sx={{
                    borderRadius: cardRadius,
                    border: `1px solid ${palette.border}`,
                    bgcolor: '#fff',
                    p: 3,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    height: '100%',
                  }}
                >
                  <Box sx={{ color: palette.accent, mb: 2, display: 'flex', fontSize: 28 }}>
                    {[<DesignServicesOutlinedIcon key={0} fontSize="inherit" />, <BuildOutlinedIcon key={1} fontSize="inherit" />, <WeekendOutlinedIcon key={2} fontSize="inherit" />][i]}
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '1.25rem' }}>
                    {s.title}
                  </Typography>
                  <Typography sx={{ mt: 2, lineHeight: 1.75, color: palette.text }}>
                    {s.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── Projects ─── */}
      <Container
        component="section"
        id="projects"
        maxWidth="lg"
        sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 5 } }}
      >
        <Box sx={{ mb: 5 }}>
          <Typography sx={sectionLabel}>Проекты</Typography>
          <Typography
            variant="h2"
            sx={{ mt: 1.5, fontSize: { xs: '1.875rem', md: '2.25rem' } }}
          >
            Примеры направлений и кейсов
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map((p, i) => (
            <Grid size={{ xs: 12, lg: 4 }} key={p.title}>
              <Box
                sx={{
                  overflow: 'hidden',
                  borderRadius: cardRadius,
                  border: `1px solid ${palette.border}`,
                  bgcolor: '#fff',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  height: '100%',
                }}
              >
                <ImagePlaceholder height={240} label={p.title} />
                <Box sx={{ p: 3 }}>
                  <Typography sx={{ mb: 1.5, fontSize: '0.875rem', color: palette.accent }}>
                    Проект {i + 1}
                  </Typography>
                  <Typography variant="h3" sx={{ fontSize: '1.25rem' }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{ mt: 1.5, lineHeight: 1.75, color: palette.text }}>
                    {p.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ─── Process ─── */}
      <Box
        component="section"
        sx={{
          borderTop: `1px solid ${palette.border}`,
          borderBottom: `1px solid ${palette.border}`,
          bgcolor: palette.soft,
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 5 } }}>
          <Box sx={{ mb: 5, maxWidth: 640 }}>
            <Typography sx={sectionLabel}>Этапы работы</Typography>
            <Typography
              variant="h2"
              sx={{ mt: 1.5, fontSize: { xs: '1.875rem', md: '2.25rem' } }}
            >
              Как строится работа над интерьером
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {processSteps.map((item) => (
              <Grid size={{ xs: 12, md: 6, xl: 3 }} key={item.step}>
                <Box
                  sx={{
                    borderRadius: cardRadius,
                    bgcolor: '#fff',
                    p: 3,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    border: `1px solid ${palette.ring}`,
                    height: '100%',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      color: palette.accent,
                    }}
                  >
                    {item.step}
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 2, fontSize: '1.25rem' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ mt: 1.5, lineHeight: 1.75, color: palette.text }}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── Contact CTA ─── */}
      <Container component="section" maxWidth="lg" sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 5 } }}>
        <Box
          sx={{
            borderRadius: cardRadius,
            bgcolor: palette.darkAccent,
            color: '#fff',
            p: { xs: 4, md: 6 },
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography sx={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.24em', color: '#efe7dc' }}>
                Контакт
              </Typography>
              <Typography
                variant="h2"
                sx={{ mt: 1.5, fontSize: { xs: '1.875rem', md: '2.25rem' }, color: '#fff' }}
              >
                Готовы обсудить ваш интерьер?
              </Typography>
              <Typography sx={{ mt: 2.5, maxWidth: 640, lineHeight: 2, color: '#f5efe7' }}>
                Напишите в Instagram, чтобы обсудить задачу, сроки и формат работы. Можно
                начать с одной комнаты, квартиры или полного проекта.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="contained"
                  href="https://www.instagram.com/olga.krishtapovich.design/"
                  disableElevation
                  sx={{
                    borderRadius: '1rem',
                    px: 3,
                    py: 2,
                    textTransform: 'none',
                    bgcolor: '#fff',
                    color: '#6b5a3e',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    '&:hover': { bgcolor: '#f5f5f5', transform: 'translateY(-2px)' },
                    transition: 'all 0.2s',
                  }}
                >
                  Написать в Instagram
                </Button>
                <Box
                  sx={{
                    borderRadius: '1rem',
                    border: '1px solid #e0d6c8',
                    px: 3,
                    py: 2,
                    fontSize: '0.875rem',
                    color: '#f5efe7',
                    textAlign: 'center',
                  }}
                >
                  Локации: Польша, Познань, Варшава, Минск
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
