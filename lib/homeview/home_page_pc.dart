import 'package:flutter/material.dart';
import '../suoc/link_file.dart';
import '../widgets/bio_background.dart';
import '../widgets/rotating_avatar.dart';
import '../widgets/bio_info.dart';
import '../widgets/gradient_divider.dart';
import '../widgets/social_links.dart';
import '../widgets/icon_link_button.dart';
import '../widgets/donate_section.dart';

class BioPcPage extends StatelessWidget {
  const BioPcPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: BioBackground(
        overlayOpacity: 0.4,
        padding: const EdgeInsets.all(50),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1100),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Expanded(
                  flex: 1,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      RotatingAvatar(
                        size: 300,
                        gradientWidth: 5,
                        shadowBlur: 20,
                        shadowSpread: 5,
                        padding: 5,
                      ),
                    ],
                  ),
                ),
                Expanded(
                  flex: 1,
                  child: Padding(
                    padding: EdgeInsets.symmetric(horizontal: 40),
                    child: SingleChildScrollView(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          BioInfo(titleSize: 48, subtitleSize: 18),
                          SizedBox(height: 20),
                          GradientDivider(),
                          SizedBox(height: 40),
                          SocialLinks(iconSize: 40, runSpacing: 10),
                          SizedBox(height: 40),
                          GradientDivider(),
                          SizedBox(height: 40),
                          Text(
                            'Đồ tôi dùng ở đây nhé @@',
                            style: TextStyle(color: Colors.white, fontSize: 18),
                          ),
                          SizedBox(height: 10),
                          _DownArrow(),
                          SizedBox(height: 20),
                          IconLinkButton(
                            url: shopUrl,
                            iconPath: 'assets/images/tap-here.png',
                            size: 40,
                          ),
                          SizedBox(height: 50),
                          GradientDivider(),
                          SizedBox(height: 30),
                          DonateSection(imageSize: 180, fontSize: 22, borderRadius: 20),
                          SizedBox(height: 50),
                          Text(
                            "Weblink tôi tự code, anh em có góp ý gì hay cần gì thì mail tôi nhé!!!",
                            style: TextStyle(color: Colors.white),
                            textAlign: TextAlign.center,
                          ),
                          Text(
                            "< xuanthaibui204@gmail.com >",
                            style: TextStyle(color: Colors.white),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _DownArrow extends StatelessWidget {
  const _DownArrow();

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 20,
      width: 20,
      decoration: const BoxDecoration(
        image: DecorationImage(
          image: AssetImage('assets/images/downarrow.png'),
        ),
      ),
    );
  }
}
