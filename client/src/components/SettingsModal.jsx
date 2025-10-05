import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  Paper,
  Divider,
} from '@mui/material'
import { useTheme } from '../contexts/ThemeContext'
export const SettingsModal = ({ open, onClose }) => {
  const {
    darkMode,
    toggleDarkMode,
    fontSize,
    setFontSize,
    compactView,
    toggleCompactView,
    language,
    setLanguage,
  } = useTheme()
  // Sample text to preview settings
  const sampleText = 'This is how your text will appear.'
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="settings-dialog-title"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="settings-dialog-title">Settings</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Theme
          </Typography>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
            label="Dark Mode"
          />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Text Size
          </Typography>
          <FormControl fullWidth size="small" sx={{ mt: 1 }}>
            <InputLabel id="font-size-label">Font Size</InputLabel>
            <Select
              labelId="font-size-label"
              value={fontSize}
              label="Font Size"
              onChange={(e) => setFontSize(e.target.value)}
            >
              <MenuItem value="small">Small</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="large">Large</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Layout
          </Typography>
          <FormControlLabel
            control={
              <Switch checked={compactView} onChange={toggleCompactView} />
            }
            label="Compact Layout"
          />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Preview
          </Typography>
          <Paper
            elevation={3}
            sx={{
              p: compactView ? 1 : 3,
              bgcolor: darkMode ? '#333' : '#fff',
              color: darkMode ? '#fff' : '#333',
              transition: 'all 0.3s ease',
            }}
          >
            <Typography
              sx={{
                fontSize:
                  fontSize === 'small'
                    ? '0.875rem'
                    : fontSize === 'large'
                      ? '1.25rem'
                      : '1rem',
              }}
            >
              {sampleText}
            </Typography>
          </Paper>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}