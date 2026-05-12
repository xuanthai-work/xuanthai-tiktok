import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/foundation.dart';

class MusicController {
  // 🔁 Singleton (đảm bảo nhạc không tắt khi đổi layout)
  static final MusicController _instance = MusicController._internal();
  factory MusicController() => _instance;

  final AudioPlayer _audioPlayer = AudioPlayer();
  final List<String> _playlist = [
    'audios/lap_thu.mp3',
    'audios/ngay_nay_nam_ay.mp3',
  ];

  int _currentTrackIndex = 0;
  bool _isPlaying = false;

  MusicController._internal() {
    // Khi bài hiện tại phát xong → tự chuyển bài kế tiếp
    _audioPlayer.onPlayerComplete.listen((_) async {
      await _playNextTrack();
    });

    // Cập nhật trạng thái khi play/pause/stop
    _audioPlayer.onPlayerStateChanged.listen((state) {
      _isPlaying = (state == PlayerState.playing);
    });
  }

  bool get isPlaying => _isPlaying;

  /// 🎵 Bắt đầu phát nhạc (từ đầu playlist hoặc bài hiện tại)
  Future<void> startBackgroundMusic() async {
    try {
      await _audioPlayer.play(AssetSource(_playlist[_currentTrackIndex]));
      _isPlaying = true;
      debugPrint("🎶 Phát bài: ${_playlist[_currentTrackIndex]}");
    } catch (e) {
      debugPrint("⚠️ Lỗi phát nhạc: $e");
    }
  }

  /// ⏭ Phát bài kế tiếp (vòng lại đầu khi hết danh sách)
  Future<void> _playNextTrack() async {
    try {
      _currentTrackIndex = (_currentTrackIndex + 1) % _playlist.length;
      await _audioPlayer.play(AssetSource(_playlist[_currentTrackIndex]));
      debugPrint("➡️ Chuyển bài: ${_playlist[_currentTrackIndex]}");
    } catch (e) {
      debugPrint("⚠️ Lỗi khi chuyển bài: $e");
    }
  }

  /// ⏹ Dừng nhạc hoàn toàn
  Future<void> stopMusic() async {
    try {
      await _audioPlayer.stop();
      _isPlaying = false;
      debugPrint("🛑 Dừng nhạc");
    } catch (e) {
      debugPrint("⚠️ Lỗi khi dừng nhạc: $e");
    }
  }

  /// 🧹 Giải phóng tài nguyên nếu cần (ví dụ khi thoát app)
  Future<void> dispose() async {
    await _audioPlayer.dispose();
  }
}
