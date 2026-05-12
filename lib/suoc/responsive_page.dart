import 'package:flutter/material.dart';

class Responsive extends StatelessWidget {
  final Widget mobile;
  final Widget tablet;
  final Widget desktop;
  final Widget largeDesktop;

  const Responsive({
    super.key,
    required this.mobile,
    required this.tablet,
    required this.desktop,
    required this.largeDesktop,
  });

  // 🟢 Định nghĩa breakpoint
  static bool isMobile(BuildContext context) =>
      MediaQuery.of(context).size.width < 640;

  static bool isTablet(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    return width >= 640 && width < 1200;
  }

  static bool isDesktop(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    return width >= 1200 && width < 1400;
  }

  static bool isLargeDesktop(BuildContext context) =>
      MediaQuery.of(context).size.width >= 1400;

  @override
  Widget build(BuildContext context) {
    if (isMobile(context)) return mobile;
    if (isTablet(context)) return tablet;
    if (isDesktop(context)) return desktop;
    return largeDesktop;
  }
}
