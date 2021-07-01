import express from 'express';
import bodyParser from 'body-parser';
import sharp from 'sharp';

const app = express();

app.use(bodyParser.text({
  type: '*/*',
  limit: '10mb'
}));

app.post('/svg2png', async (req, res) => {
  try {
    const svgBuffer = Buffer.from(req.body, 'utf-8');
    const buffer = await sharp(svgBuffer)
      .png()
      .toBuffer();
    res.set('Content-Type', 'image/png');
    res.send(buffer);
  } catch (e) {
    console.log('error', e);
    res.status(500).send(e.message);
  }
});

const port = process.env.PORT ?? 5656;
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});