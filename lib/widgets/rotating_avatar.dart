import 'package:flutter/material.dart';
import '../suoc/link_file.dart';

class RotatingAvatar extends StatefulWidget {
  final double size;
  final double gradientWidth;
  final double shadowBlur;
  final double shadowSpread;
  final double padding;

  const RotatingAvatar({
    super.key,
    required this.size,
    this.gradientWidth = 5,
    this.shadowBlur = 20,
    this.shadowSpread = 5,
    this.padding = 5,
  });

  @override
  State<RotatingAvatar> createState() => _RotatingAvatarState();
}

class _RotatingAvatarState extends State<RotatingAvatar>
    with SingleTickerProviderStateMixin {
  late final AnimationController _rotationController;

  @override
  void initState() {
    super.initState();
    _rotationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 20),
    )..repeat();
  }

  @override
  void dispose() {
    _rotationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return RotationTransition(
      turns: _rotationController,
      child: Container(
        width: widget.size,
        height: widget.size,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: const LinearGradient(
            colors: [Colors.cyanAccent, Colors.blueAccent],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.cyanAccent.withValues(alpha: 0.6),
              blurRadius: widget.shadowBlur,
              spreadRadius: widget.shadowSpread,
            ),
          ],
        ),
        child: Padding(
          padding: EdgeInsets.all(widget.gradientWidth),
          child: const DecoratedBox(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              image: DecorationImage(
                image: AssetImage(avatarPath),
                fit: BoxFit.cover,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
